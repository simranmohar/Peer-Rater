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
        $user = Auth::user();

        $peerGroups = $user->peerGroups()->get();

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

        $user = Auth::user();

        $peerGroup = new PeerGroup;
        $peerGroup->user_id = $user->id;
        $peerGroup->description = $request->input('description');

        $peerGroup->save();

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

    /**
     * attach a exsiting user to a peer group.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function attach(Request $request, PeerGroup $peerGroup)
    {
        $request->validate([
            'user_id' => 'required'
        ]);
        $request_user_id = $request->input('user_id');
        $user = User::where('id', $request_user_id)->first();
        if (empty($user)) {
            return response()->json([
                'message' => 'Error, User not exsits!',
            ]);
        } else {
            if ($peerGroup->users()->get()->contains($user->id)) {
                return response()->json([
                    'message' => 'Error, User has already added to this peer group',
                    'peerGroup' => $peerGroup->users()->get()
                ]);
            } else {
                $peerGroup->users()->attach($user);
                return response()->json([
                    'message' => 'Success, User is added to peer group',
                    'peerGroup' => $peerGroup->users()->get()
                ]);
            } 
        }
    }

    /**
     * detach a exsiting user to a peer group.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function detach(Request $request, PeerGroup $peerGroup)
    {
        $request->validate([
            'user_id' => 'required'
        ]);
        $request_user_id = $request->input('user_id');
        $user = User::where('id', $request_user_id)->first();
        if (empty($user)) {
            return response()->json([
                'message' => 'User not exsits!',
            ]);
        } else {
             if ($peerGroup->users()->get()->contains($user->id)) {
                $peerGroup->users()->detach($user);
                return response()->json([
                    'message' => 'Success, User is detached from peer group',
                    'peerGroup' => $peerGroup->users()->get()
                ]);
            } else {
                return response()->json([
                    'message' => 'Error, User does not exsit in peer group',
                    'peerGroup' => $peerGroup->users()->get()
                ]);
            }
        }
    }
}
