<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->header('Authorization') === null) {
            abort(401, 'Unauthorized');
        }

        $token = str($request->header('Authorization'))->after('Bearer ')->toString();

        $user = User::where('api_token', $token)->first();

        if (!$user) {
            abort(401, 'Unauthorized');
        }

        auth()->login($user);


        return $next($request);
    }
}
