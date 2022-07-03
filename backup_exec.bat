 @echo off
 :loop
 echo Backup background processing...
 cd directory_of_js_file_to_run
 node js_file_to_run
 timeout /t 100
 goto loop