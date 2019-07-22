Nginx 摸过记录 .
----------------

    server {
        listen       8080;
        server_name  localhost;

        location / {
            proxy_pass      http://localhost:8881;
            proxy_redirect  default; 
        }
        location /freepm {
            # rewrite       ^/freepm/(.*)$ $1 break;
            proxy_pass  http://tm.cwewater.com:9001/FreeLogin.ashx;
        }
         location /freeim {
            # rewrite       ^/freeim/(.*)$ $1 break;
            proxy_pass  http://tm.cwewater.com:9003/Login/FreeKey;
        }
    }
