<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Logout;

class DestroyUserApiToken
{
    /**
     * Handle the event.
     */
    public function handle(Logout $event): void
    {
        $event->user->update([
            'api_token' => null
        ]);
    }
}
