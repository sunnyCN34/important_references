curl \
--header "Content-Type: application/json" \
--user socrates@brightcove.com \
--request PATCH \
--data '{
  "autoplay": true,
  "fullscreenControl": false
}' \
https://players.api.brightcove.com/v2/accounts/3303963094001/players/B1zWGh4COZ/configuration


curl --header "Content-Type: application/json" --user ssahu@brightcove.com --request PATCH --data '{        
  "autoplay": false,
  "fullscreenControl": false
}' https://players.api.brightcove.com/v2/accounts/5481942457001/players/default/configuration



curl --header "Content-Type: application/json" --user ssahu@brightcove.com --request PATCH --data '{        
  "autoplay": false,
  "fullscreenControl": false,
  "plugins": [
    {
      
     "requestMode": "onload"
     }
     ],
        
}' https://players.api.brightcove.com/v2/accounts/5481942457001/players/default/configuration



curl \
      --header "Content-Type: application/json" \
      --user ssahu@brightcove.com \
      --request GET \
      https://players.api.brightcove.com/v2/accounts/5481942457001/players/default/configuration/preview






curl --header "Content-Type: application/json" --user ssahu@brightcove.com --request PATCH --data '{        
  "autoplay": true,
}' https://players.api.brightcove.com/v2/accounts/5481942457001/players/default/configuration