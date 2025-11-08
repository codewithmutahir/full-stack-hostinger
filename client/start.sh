#!/bin/sh
PORT=${PORT:-3000}
exec npx serve -s dist -l $PORT

