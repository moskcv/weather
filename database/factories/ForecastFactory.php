<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Forecast>
 */
class ForecastFactory extends Factory
{
    public function definition(): array
    {
        return [
            'city_name' => fake()->city(),
            'min_tmp' => fake()->randomFloat(2),
            'max_tmp' => fake()->randomFloat(2),
            'wind_spd' => fake()->randomFloat(2),
            'timestamp_dt' => now(),
        ];
    }
}
