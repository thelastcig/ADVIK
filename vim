[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=harry
Group=www-data
WorkingDirectory=/home/adi/wisdomtribes
ExecStart=/home/adi/wisdomtribes/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          wisdomtribes.wsgi:application

[Install]
WantedBy=multi-user.target
