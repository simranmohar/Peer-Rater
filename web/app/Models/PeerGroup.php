<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class PeerGroup extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
