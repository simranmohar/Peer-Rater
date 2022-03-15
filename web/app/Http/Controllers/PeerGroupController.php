<?php

namespace App\Http\Controllers;

use App\Models\PeerGroup;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PeerGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $peerGroups = PeerGroup::all();

        return response()->json($peerGroups);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required'
        ]);

        $peerGroup = new PeerGroup;
        $peerGroup->description = $request->input('description');

        $peerGroup->save();

        $user = Auth::user();
        $peerGroup->users()->attach($user);

        return response()->json([
            'message' => 'Great success! New peer group created',
            'peerGroup' => $peerGroup
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PeerGroup  $peerGroup
     * @return \Illuminate\Http\Response
     */
    public function show(PeerGroup $peerGroup)
    {
        return $peerGroup;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PeerGroup  $peerGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PeerGroup $peerGroup)
    {
        $request->validate([
           'description' => 'nullable'
        ]);

        $peerGroup->update($request->all());

        return response()->json([
            'message' => 'Great success! Peer group updated',
            'peerGroup' => $peerGroup
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PeerGroup  $peerGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(PeerGroup $peerGroup)
    {
        $user = Auth::user();

        $peerGroup->users()->detach($user);

        $peerGroup->delete();

        return response()->json([
            'message' => 'Successfully deleted peer group!'
        ]);
    }
}
