<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use App\Models\Category;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $surveys = Survey::all();

        return response()->json($surveys);
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
            'peer_group_id' => 'required'
        ]);

        // $survey = Survey::create($request->all());

        $survey = new Survey;
        $categories = Category::where('survey_id', $survey->id)->get();
        $survey->peer_group_id = $request['peer_group_id'];
        $survey->save();
        if ($categories) {
            $survey->categories()->attach($categories);
        }

        return response()->json([
            'message' => 'Great success! New survey created',
            'survey' => $survey
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey)
    {
        return $survey;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Survey $survey)
    {
        $request->validate([
           'peer_group_id' => 'nullable'
        ]);

        $survey->update($request->all());

        return response()->json([
            'message' => 'Great success! Survey updated',
            'survey' => $survey
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survey $survey)
    {   
        $categories = Category::where('survey_id', $survey->id)->get();
        if ($categories) {
            $survey->categories()->detach($categories);
        }
        $survey->delete();

        return response()->json([
            'message' => 'Successfully deleted survey!'
        ]);
    }
}
