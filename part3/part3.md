-  When the debugger is triggered, set a breakpoint at the initialization of the local variable result in calculateSum(). Take a screenshot of the list of breakpoints containing the breakpoint you just added.
    - see ["Screen_Shot_1_list_of_breakpoints.png"](Screen_Shot_1_list_of_breakpoints.png)

- Add watch expressions to find the value of num1 and num2, and the data type of result. Take a screenshot of the watch expressions list.
    - see 
      - ["Screen_Shot_2_watch_expression_list.png"](Screen_Shot_2_watch_expression_list.png)
      - ["Screen_Shot_3_watch_value_of_num1.png"](Screen_Shot_3_watch_value_of_num1.png)
      - ["Screen_Shot_4_watch_value_of_num2.png"](Screen_Shot_4_watch_value_of_num2.png)
      - ["Screen_Shot_5_watch_type_and_value_of_result.png"](Screen_Shot_5_watch_type_and_value_of_result.png)



1. What was the bug?
    - The bug is the types of varible num1 and num2 are string.
    - The bug is located at line 3 and 4 of part1.js file: 
      - line3: let num1 = document.getElementById("num1").value;
      - line4: let num2 = document.getElementById("num2").value;

2. How would you fix it? Include a screenshot of your fix.
    - Add a data type conversion for variable num1 and num2 from string to number.
    - Change line 3 and line 4 of part1.js file as follows:
      - line3 change to: let num1 = Number(document.getElementById("num1").value);
      - line4 change to: let num2 = Number(document.getElementById("num2").value);
    - see 
      - ["Screen_Shot_6_fix_type_and_value_of_result.png"](Screen_Shot_6_fix_type_and_value_of_result.png)
      - ["Screen_Shot_7_show_correct_result_in_html.png"](Screen_Shot_7_show_correct_result_in_html.png)


3. What is the name of the new json file?
   - citylots.json

4. Which file initiated the download of the new file?
   - part2.js

5. What is its file size?
   - 11.7 MB

6. How long did it take to download?
   - 1.83s

7. What was your User-Agent for the browser that made the request?
   - Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36

8. In the response, what type of server did it come from?
   - Apache

9. When was the file last modified?
   - Tue, 26 Jan 2021 22:14:13 GMT
  
10. What was the Content-Type of the file?
    - application/json


11. Which method inside the initiating file made the request?
    - fetchData()
