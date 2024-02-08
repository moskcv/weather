<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ForecastStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'city' => ['required', 'string'],
            'timestamp_dt' => ['required', 'date'],
            'max_tmp' => ['required', 'decimal:2'],
            'min_tmp' => ['required', 'decimal:2'],
            'wind_spd' => ['required', 'decimal:2'],
        ];
    }
}
