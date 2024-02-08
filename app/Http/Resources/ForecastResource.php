<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ForecastResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'city' => $this->city_name,
            'updated_at' => $this->updated_at->format('Y-m-d g:i A'),
            'data' => [
                [
                    'min_tmp' => $this->min_tmp,
                    'max_tmp' => $this->max_tmp,
                    'wind_spd' => $this->wind_spd,
                    'timestamp_dt' => $this->timestamp_dt->format('Y-m-d g:i A'),
                ]
            ],
        ];
    }
}
