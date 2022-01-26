// que1:-
// myFavouriteGames=["pubg","mario","fire-water"]
// console.log(myFavouriteGames);

// que2:-
// myFavouriteFruits=["apple","mango","chiku","orange"]
// console.log(myFavouriteFruits[2]);

// que3:-
// var myFavouriteFruits = ["Mango", "Orange", "Banana"];
// console.log(myFavouriteFruits);
// console.log(myFavouriteFruits.pop());

// que4:-
// var myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift("Basketball")
// console.log(myFavouriteGames);



// que6:-
// let arr = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// arr.splice(3,1)
// console.log(arr);



// que7:-
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// c=0
// for (i in numbers){
//     c=c+1
// }
// console.log(c);

// que8:-.............................................MAX in array
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// a=0
// for(i in numbers){
//     if (numbers[i]>a){
//         a=numbers[i]}
// }
// console.log(a);



// que9:-................................SECOND MAX............
// a=0
// b=0
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// for(i in numbers){
//     if (numbers[i]>a){
//         b=a
//         a=numbers[i]}
// }
// console.log(b);


// que10:-
// array=[]
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// for(i=numbers.length-1;i>=0;i--){
//     array.push(numbers[i])
// }
// console.log(array);


// que:-11..toString..................................
// arr2=[]
// var a=['m','a','l','a','y','a','l','a','m'];
// for(i in a){
//     arr2.unshift(a[i])
// }
// c=0
// for( j in arr2){
//     if(a[j]===arr2[j]){
//         c++}
// }
// if (c==a.length){
//     console.log("this is palindroe");}
// else{console.log("not palindrome");}



// que12:-
// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// var list3=[]
// for(var i of list1){
//     if(!list2.includes(i)){list3.push(i)}
// }console.log(list3);


// que13:-
// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// sum=0
// for( i of marks){
//     for(j of i){
//         sum=sum+j
//     }
// }
// console.log(sum);


// que14:-
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// list1=[]
// for(i of n){
//     for(j of n){
//         if(i+j==30){
//             (list1.push([i,j]))}
//     }
// }
// console.log(list1)


// que15:-
// even=0
// odd=0
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// for(i of elements){
//     if(i%2==0){
//         even+=1}
//     else{
//         odd+=1
//     }
// }
// console.log("even",even);
// console.log("odd",odd);


// que16:-
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// even=0
// odd=0
// for(i of elements){
//     if(i%2==0){
//         even+=i
//     }
//     else{
//         odd+=i
//     }
// }
// console.log("sum of even",even);
// console.log("sum of odd",odd);



// que17:-
// even_sum=0
// odd_sum=0
// even_count=0
// odd_count=0
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// for(i of elements){
//     if (i%2==0){
//         even_sum+=i
//         even_count+=1
//     }
//     else{
//         odd_sum+=i
//         odd_count+=1
//     }
// }
// console.log("average of even number",even_sum/even_count);
// console.log("average of odd number",odd_sum/odd_count);




// que18:-
// count
// sum
// average
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// even_sum=0
// even_count=0
// odd_sum=0
// odd_count=0
// for(i of elements){
//     if(i%2==0){
//         even_sum+=i
//         even_count+=1
//     }
//     else{odd_sum+=i
//         odd_count+=1


//     }
// }
// console.log("count of even",even_count);
// console.log("count of odd",odd_count);
// console.log("sum of even",even_sum);
// console.log("sum of odd",odd_sum);
// console.log("average of even",even_sum/even_count);
// console.log("average of odd",odd_sum/odd_count);





// que19:-
// crore_pati=0
// lakh_pati=0
// dilwale=0
// var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// for(i of kitnapaisahai){
//     if(i>=10000000){
//         crore_pati+=1
//     }
//     else if(i>=100000 && i<10000000){
//         lakh_pati+=1
//     }
//     else{
//         dilwale+=1
//     }
// }
// console.log("crorepati:-",crore_pati);
// console.log("lakhpati:-",lakh_pati);
// console.log("dilwale:-",dilwale);



// que20:-
// unique=[]
// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// for(i of char_list){
//     if (!unique.includes(i)){
//         unique.push(i)}
// }
// for(j of unique){
//     c=0
//     for (k of char_list){
//     if (j===k){
//         c+=1}
// }
// console.log(c,j);
// }



// que21:-
// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// list=[]
// for(i of n){
//     if (!list.includes(i)){
//         list.push(i)}
// }
// console.log(list);


// que22:-
// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// substring="over"
// line=" "
// var main=mainStr.split(" ")
// for(i of main){
//     if(i!=substring){
//         line=line+i+" "}
// }
// console.log(line);

