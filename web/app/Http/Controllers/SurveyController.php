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
        // $categories = Category::where('survey_id', $request->get('id'));
        $survey = new Survey;
        $categories = array();
        forEach($request['categories'] as $description) {
            $category = new Category;
            $category->peer_group_id = $request['peer_group_id'];
            $category->survey_id = $survey->id;
            $category->description = $description;
            array_push($categories, $category);
        }
        $survey->peer_group_id = $request['peer_group_id'];
        $survey->categories()->saveMany($categories);
        $survey->save();
        unset($categories);

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

        // Ask Tristan about whehter the front end will have option to edit the survey questions

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
        $survey->delete();

        return response()->json([
            'message' => 'Successfully deleted survey!'
        ]);
    }
}
