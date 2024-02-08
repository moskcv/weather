<?php

namespace App\Http\Controllers\API\V1\Forecast;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForecastIndexRequest;
use App\Http\Requests\ForecastStoreRequest;
use App\Http\Resources\ForecastResource;
use App\Models\Forecast;

class ForecastController extends Controller
{
    public function index(ForecastIndexRequest $request): ForecastResource
    {
        $forecast = Forecast::where('city_name', $request->input('city'))->firstOrFail();

        return ForecastResource::make($forecast);
    }

    public function store(ForecastStoreRequest $request): ForecastResource
    {
        $forecast = Forecast::firstOrNew([
            'city_name' => $request->validated('city')
        ]);

        $forecast->fill($request->validated());
        $forecast->save();

        $forecast->touch();

        return ForecastResource::make($forecast);
    }
}
