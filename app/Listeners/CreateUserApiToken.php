<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;

class CreateUserApiToken
{
    /**
     * Handle the event.
     */
    public function handle(Login $event): void
    {
        if ($event->user->getApiToken()) {
            return;
        }

        $event->user->update([
            'api_token' => \Illuminate\Support\Str::random(60),
        ]);
    }
}
