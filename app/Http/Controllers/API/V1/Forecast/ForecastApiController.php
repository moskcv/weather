<?php

namespace App\Http\Controllers\API\V1\Forecast;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForecastIndexRequest;
use Carbon\Carbon;
use Illuminate\Http\Client\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;

class ForecastApiController extends Controller
{
    public function __invoke(ForecastIndexRequest $request): JsonResponse
    {
        $response = Http::baseUrl(config('forecast.base_url'))
            ->withQueryParameters([
                'q' => $request->input('city'),
                'units' => config('forecast.units'),
                'appid' => config('forecast.api_key'),
            ])
            ->get('/data/2.5/forecast');

        if ($response->failed()) {
            return response()->json([
                'message' => $response->json('message', 'Something went wrong'),
            ], $response->json('code', 500));
        }

        return response()->json($this->prepareResponse($response));
    }

    private function prepareResponse(Response $response): array
    {
        $resp = [
            'city' => $response->json('city.name'),
            'period_from' => Carbon::parse(Arr::first($response->json('list'))['dt'])->format('Y-m-d g:i A'),
            'period_to' => Carbon::parse(Arr::last($response->json('list'))['dt'])->format('Y-m-d g:i A'),
            'data' => [],
        ];

        foreach ($response->json('list') as $item) {
            $resp['data'][] = [
                'min_tmp' => $item['main']['temp_min'],
                'max_tmp' => $item['main']['temp_max'],
                'wind_spd' => $item['wind']['speed'],
                'timestamp_dt' => Carbon::parse($item['dt'])->format('Y-m-d g:i A'),
            ];
        }

        return $resp;
    }
}
