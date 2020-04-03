<?php

if (isset($data['website'])) {

    // save the submission in case it is actually a genuine one
    cockpit('forms')->save('bots', ['data' => $data]);

    return false;
}

foreach($data as $field => $value){
    if(!in_array($field, ['website', 'name', 'email', 'message'])){
        return false;
    }
}

if (empty($data['name'])) {
    $this->app->stop(['error' => 'Името е задължително!'], 200);
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $this->app->stop(['error' => 'Необходим е валиден Имейл!'], 200);
}

if (empty($data['message'])) {
    $this->app->stop(['error' => 'Съобщението е задължително!'], 200);
}

return true;