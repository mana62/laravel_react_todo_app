<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    // todo一覧取得
    public function index() {
        return Todo::withTrashed()->get();
    }

    // todo保存
    public function store(Request $request) {
        $request->validate(([
            'content' => 'required|string|max:255',
        ]));

        $todo = Todo::create([
            'content' => $request->content,
            'is_done' => false,
        ]);
        return response()->json($todo, 201);
    }

    // todoアップデート
    public function update(Request $request, Todo $todo) {
        $todo->is_done = $request->is_done;
        $todo->save();

        return response()->json($todo);
    }

    // todo削除
    public function destroy(Todo $todo) {
        $todo->delete();
        return  response()->json(null, 204);
    }
}
