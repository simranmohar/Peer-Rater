<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class Survey extends Model
{
    use HasFactory;

    protected $fillable = [
        'peer_group_id',
        'categories'
    ];

    protected $casts = [
        'categories' => 'array'
    ];

    public function categories() {
        return $this->hasMany(Category::class);
    }
}
