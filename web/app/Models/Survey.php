<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Survey extends Model
{
    use HasFactory;

    protected $fillable = [
        'peer_group_id'
    ];

    public function categories() {
        return $this->hasMany(Category::class);
    }
}
