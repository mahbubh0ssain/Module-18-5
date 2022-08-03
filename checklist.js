// // ভালো করে মনোযোগ দিয়ে একটার পর একটা চেকলিস্ট ধরে ধরে চেক করবে। একটাও বাদ দিবে না। বাদ দিলেই তোমার আব্বার কাছে বিচার দিবো।

// // ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?

// JavaScript is a high level programming language (scripting language), it is interpreted language,  it reads the code from top to bottom and left to right. It keeps away from the direct machine language that is why it is called high level language.

// // ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?

// JS is single threaded language that menans it can execute one task at a time or a piece of code at a time.It's an interpreted programming language.

// // ৩. ভেরিয়েবল কি জিনিস?

// variable is a container that store the value that can vary any time.

// // ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে।

// To declare a variable we need  to do some task like
// 1. write the word var
// 2. give a name of the variable
// 3. put the equal sign(=)
// 4. after the equal sign put a value for the name
// 5. you can start the name with any letter but not with number but end with number
// 6. there are three types of naming:
//   1. snak_case = my_name
//   2. camelCase = myName
//   3. PascalCae = MyName

// // ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে।

// suppose:
// var name = "Mahbub Hossain"
// to change the variable I have to write the name of the variable and give a new value.
// name = "Muhammad Hasnain Bin Mahbub"

// // ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
// There are so many types of variables:
// 1. numeric = 1, 2, 3...
// 2. string = " Nepal"
// 3. boolean = true / false
// 4. undefined = undefined etc...

// // ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।

// Primitive:
// It is predefined by Java, starts with lower case, used to call methods to perform certain objects.
// IT has always a vlaue.

// NonPrimitive:
// It is defined by the programmer. Starts with uppercase, can not used as a performer, it can be null.

// // ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।

// **** PLEASE SEE NUMBER 4 ABOVE.

// // ৯. দুইটা ভেরিয়েবল এর মধ্যে +, -, *, /, % কিভাবে করে?
// ** For addition:
// var num1 = 4;
// var num2 = 3;
// console.log(num1 + num2);

// ** For subtraction:
// var num1 = 4;
// var num2 = 3;
// console.log(num1 - num2);
// ** For multiplication:

// var num1 = 4;
// var num2 = 3;
// console.log(num1 * num2);

// ** For division:
// var num1 = 4;
// var num2 = 3;
// console.log(num1 / num2); // ভাগফল

// ** For remainder:
// var num1 = 133;
// var num2 = 7;
// console.log(num1 % num2); // ভাগশেষ

// // ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।

// += >> var num1 = num1 +3 // var num1 += 3
// -= >> var num1 = num1 -3 // var num1 -= 3
// *= >> var num1 = num1 *3 // var num1 *= 3
// /= >> var num1 = num1 /3 // var num1 /= 3

// // ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো।

// ++used in loop that means the given variable in the condition will increase 1 after an iteration done.
// -- used in loop that means the given variable in the condition will decrease 1 after an iteration done.

// // ১২ parseInt, parseFloat, toFixed এইগুলা কি করে?

//   parseInt = কোন একটা স্ট্রিং কে নাম্বারে কনভার্ট করতে ব্যবহার করা হয়। পূর্ণ সংখ্যার ক্ষেত্রে।
//   parseFloat = কোন একটা স্ট্রিং কে নাম্বারে কনভার্ট করতে ব্যবহার করা হয়। ভগ্নাংশ সংখ্যার ক্ষেত্রে।
//   toFixed = দশমিকের পরে আমি কত ঘর পর্যন্ত নিবো তা নির্দেশ করে এটা। ২ ঘর নিলে toFixed(2)

// // ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়।

// array বলা যায় একটি কন্টেইনার কিন্তু variable না। array লিখা শুরু করতে হয় variable এর মত করেই, কিন্তু = এর পরে আসল পার্থক্য থাকে।
// var name = "Mahbub"
// var names = ["Mahub", "Sadik", "Raju", "Ruhul", "Sadia"]
// এইটা মূলত index অনুযায়ী কাজ করে।

// // ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে।

// একটা array এর মাঝে কয়টা উপাদান আছে সেইতা বের করার জন্য array এর নাম + .length দিলেই চলে আসবে।
// var names = ["Mahub", "Sadik", "Raju", "Ruhul", "Sadia"]
// console.log(names.length);

// // ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।

// array এর index গুলা 0 থেকে শুরু হয়। কোন array তে নতুন কিছু add করার মাধ্যমে মূলত index position change হয়।

// // ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়

// কোন index  এর মান যদি -1 হয় তাহলে বুঝতে হবে সেই উপাদানটা আসলে ঐ array তে নাই।

// // ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো

// var names = ["Mahub", "Sadik", "Raju", "Ruhul", "Sadia"]
// এইটা একটা array । এর মধ্য index দিয়ে উপাদান এর মান খুঁজে বের করতে হলে আমাকে

// console.log(names[3]);

// // ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে

// console.log(names[3] = "Saju");
// // ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
// var names = ["Mahbub", "Sadik", "Raju", "Ruhul", "Sadia"];
// console.log(names.indexOf("Raju"));

// // ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

// তার মানে হইলো অত নাম্বার index  আসলে ওই array তে নাইই।
// ***
//   The array the map() method returns consists of the values that are returned from the callback function. If you don't return a value from a function in JavaScript, you implicitly return undefined . Copied! This is the most common reason the map() method returns an array containing undefined values.
// ***

// // ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

//   use arr.push("something") to input a new element at the last of the array.
//   use arr.pop() to remove the last element from ana array.

// // ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// use arr.unshift("something") to add a new element at begining of the array.
// use arr.shift() to remove first element from the array.

// // ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।।

// >, বাম পাশের টা ডান পাশের থেকে বড়
// <,  বাম পাশের টা ডান পাশের থেকে ছোট
// ==, বাম পাশের টা ডান পাশের সমান
// !=, বাম পাশের টা ডান পাশের অসমান কিনা
// <=, বাম পাশের টা ডান পাশের থেকে ছোট বা সমান কিনা
// >=, বাম পাশের টা ডান পাশের থেকে বড় বা সমান কিনা
// ===, বাম পাশের টা ডান পাশের টা মান সমান কীনা এবং ডেটা টাইপ সমান কিনা
// !==, বাম পাশের টা ডান পাশের টা মান সমান কীনা এবং ডেটা টাইপ অসমান কিনা
// &&,  বাম পাশের টা ডান পাশের টা দুইটা শর্তই পূরণ করতে হবে
// ।।   বাম পাশের টা ডান পাশের টা একটা শর্ত পূরণ করলেই হবে

// // ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

// var myBudget = 80000;

// if (myBudget > 80000) {
//   console.log("I will buy a New Macbook Pro M2");
// } else if (myBudget > 60000) {
//   console.log("I will buy a gaming laptop.");
// } else if (myBudget > 40000) {
//   console.log("I will buy a new lenovo YOGA");
// } else if (myBudget > 20000) {
//   console.log("I will buy an old laptop.");
// } else {
//   console.log("I will adjust myself with my mobile.");
// }


// // ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।

// for (var i = 0; i <= 39; i++) {
//   console.log("আসকে আমার মন ভালো নেই");
// }


// // ২৬. while লুপ কিভাবে কাজ করে

// A while loop is a loop that continues to run and execute a while statement as long as a predetermined condition holds true. After each iteration, the loop checks that the condition remains true. If the condition is now false, the loop terminates.

// // ২৭. for লুপ কিভাবে কাজ করে

// A "For" Loop is used to repeat a specific block of code a known number of times. For example, if we want to check the grade of every student in the class, we loop from 1 to that number. When the number of times is not known before hand, we use a "While" loop.

// // ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।

// the while loop returns into an Infinity loop. 

// // ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও

// for (var i = 58; i <= 98; i++) {
//   console.log(i);
// }

// // ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও

// for (var i = 412; i <= 456; i += 2) {
//   console.log(i);
// }


// // ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও

// for (var i = 581; i <= 623; i += 2) {
//   console.log(i);
// }

// // ৩২.while আর for loop এর মধ্যে পার্থক্য কি।

// Use a for loop when you know the loop should execute n times. Use a while loop for reading a file into a variable. Use a while loop when asking for user input. Use a while loop when the increment value is nonstandard.

// // ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// var myLearnings = [
//   "HTML",
//   "CSS",
//   "BOOTSTRAP",
//   "TAILWIND",
//   "RESPONSIVENESS",
//   "JS",
//   "CONDITIONAL",
// ];

// for (var i = 0; i < myLearnings.length; i++) {
//   var myLearning = myLearnings[i];
//   console.log(myLearning);
// }



// // ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও।

// var mobiles = [
//   "Symphony",
//   "Symphony P6",
//   "Samsung Galaxy J2",
//   "Xiaomi Redmi Note 7",
// ];
// var i = 0;
// while (i < mobiles.length) {
//   var mobile = mobiles[i];
//   console.log(mobile);
//   i++;
// }


// // ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও


// for (var i = 30; i <= 86; i++) {
//   console.log(i);
//   if (i >= 44) {
//     break;
//   }
// }

// // ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// var bookPrices = [120, 190, 230, 338, 126, 189, 326, 200, 280];

// for (var i = 0; i < bookPrices.length; i++) {
//   var bookPrice = bookPrices[i];
//   if (bookPrice > 200) {
//     continue;
//   }
//   console.log(bookPrice);
// }