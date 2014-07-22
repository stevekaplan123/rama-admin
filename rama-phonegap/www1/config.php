<?php
    $api_key = "cnx18oq6pwjumjylxfhdbya1zzfswp4s";
    $secret_key = "nzhys4x2in98llaopstivtf59mac6kof";
    $FQDN = "https://api.att.com";
    $scope = "SPEECH";
    $oauth_file = "speechoauthtoken.php";
    $speech_context_config = array('Generic', 'TV', 'BusinessSearch', 'Websearch',
		    'SMS', 'Voicemail', 'QuestionAndAnswer', 'Gaming', 'SocialMedia');
    $default_file = "default.wav";
    $x_arg = "ClientApp=NoteTaker, ClientVersion=1.0.1,DeviceType=Linux";
    $xSpeechSubContext = 'Chat';
    $audioFolder = "audio";
    $linkSource = 'https://gist.github.com/3035532';
    $linkDownload = 'https://github.com/attdevsupport/ATT_APIPlatform_SampleApps/tree/master/RESTFul/Speech/PHP/app1';
    $linkHelp = 'https://raw.github.com/attdevsupport/ATT_APIPlatform_SampleApps/master/RESTFul/Speech/PHP/app1/README.txt';
    $endpoint = $FQDN . "/speech/v3/speechToText";
?>