<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TodoTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_can_create_todo(): void
    {
        $response = $this->postJson('/api/todos', ['content' => 'テスト']);

        $response
        ->assertStatus(201)
        ->assertJson(['content' => 'テスト']);
    }
}