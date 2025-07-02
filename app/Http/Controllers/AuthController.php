<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            "name" => ['required', 'string', 'min:3', 'max:255'],
            "email" => ['required', 'email', 'unique:App\Models\User,email'],
            "password" => ['required', 'confirmed'],
        ]);

        $userData = $request->only('name', 'email', 'password');

        $userData['password'] = Hash::make($userData['password']);
        $user = null;

        try {
            $user = User::create($userData);
        } catch (\Throwable $th) {
            logger()->error('Failed to create user, with error: ' . $th->getMessage());

            return response()->json([
                'success' => false,
            ]);
        }

        if (!$user) {
            return response()->json([
                'success' => false,
            ]);
        }


        return response()->json([
            'success' => true,
            'token' => $user->getApiToken(),
            'user' => $user->only(['id', 'name', 'email'])
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            "email" => ['required', 'email', 'exists:App\Models\User,email'],
            "password" => ['required', 'string'],
        ]);

        if (auth()->attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => true,
                'token' => auth()->user()->getApiToken(),
                'user' => auth()->user()->only(['id', 'name', 'email'])
            ]);
        }

        return response()->json([
            'success' => false
        ]);
    }

    public function fetch(Request $request)
    {
        return response()->json([
            'success' => true,
            'token' => auth()->user()->getApiToken(),
            'user' => auth()->user()->only(['id', 'name', 'email'])
        ]);
    }

    public function logout(Request $request)
    {
        // Logout
        auth()->logout();

        return response()->json([
            'success' => true
        ]);
    }
}
