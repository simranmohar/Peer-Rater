<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Survey;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();

        return response()->json($categories);
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

        $category = new Category;
        $survey = Survey::with('categories')->where('id', $request->input('survey_id'))->get();
        $category->peer_group_id = $request->input('peer_group_id');
        $category->survey_id = $request->input('survey_id');
        $category->description = $request->input('description');
        // $category->survey()->associate($survey);
        /* Above commented out for now */
        $category->save();

        return response()->json([
            'message' => 'Great success! New category created',
            'category' => $category
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
           'description' => 'nullable'
        ]);

        $category->update($request->all());
        
        if ($request->input('description')) {
            $category->description = $request->input('description');
            $category->save();
        } 

        return response()->json([
            'message' => 'Great success! Category updated',
            'category' => $category
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $categorys
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json([
            'message' => 'Successfully deleted category!'
        ]);
    }
}
