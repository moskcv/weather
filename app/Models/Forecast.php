<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forecast extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_name',
        'min_tmp',
        'max_tmp',
        'wind_spd',
        'timestamp_dt',
    ];

    protected $casts = [
        'timestamp_dt' => 'datetime',
    ];

    public function minTmp(): Attribute
    {
        return Attribute::make(
            get: fn (int $value): float => $value / 100,
            set: fn (float $value): int => $value * 100,
        );
    }

    public function maxTmp(): Attribute
    {
        return Attribute::make(
            get: fn (int $value): float => $value / 100,
            set: fn (float $value): int => $value * 100,
        );
    }

    public function windSpd(): Attribute
    {
        return Attribute::make(
            get: fn (int $value): float => $value / 100,
            set: fn (float $value): int => $value * 100,
        );
    }
}
