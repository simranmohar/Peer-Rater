<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

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
            'peer_group_id' => 'required',
            'survey_id' => 'required',
            'description' => 'required'
        ]);

        $category = new Category;
        $category->peer_group_id = $request->input('peer_group_id');
        $category->survey_id = $request->input('survey_id');
        $category->description = $request->input('description');

        $category->save();

        return response()->json([
            'message' => 'Great success! New category created',
            'survey' => $category
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
     * @param  \App\Models\Category  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
           'peer_group_id' => 'nullable',
           'description' => 'nullable',
           'survey_id' => 'nullable'
        ]);

        $category->update($category->all());

        return response()->json([
            'message' => 'Great success! Category updated',
            'survey' => $category
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
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
