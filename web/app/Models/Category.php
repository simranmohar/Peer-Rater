<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Survey;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'peer_group_id'
    ];

    public function survey() {
        return $this->belongsTo(Survey::class);
    }
}
