
document.write("<b>Hello BlueSky!</b> <br><br>Welcome to Sid's bowling score generator!<br><br>");


// Input string (user input) is stored below
var input= prompt("Enter the score of each round seperated by a comma");

// We now delimit using the comma into an array 

// Print the final result:
var scoreList = input.split(",").map(Number);

//Store the length of scoreList
var bowllen=scoreList.length;//number of bowls or chances

var max_frames=10;
var current_frame=1;
var current_bowl=0;
var score=0;
var frameScore=0;
var frameChanceCtr=0;


//Calculate score
for(var i=0;i<bowllen;i++)
{
	current_bowl=i;
    if(current_frame>=10 || current_bowl>=bowllen)
	{
   		break;
	}//end if exceed 

	frameChanceCtr++;//increment
	
	if(scoreList[current_bowl]==10 && frameChanceCtr==1){ //if a strike
        //if 2 bowls ahead exist add them
        //document.write(" Strike!");
        if(bowllen-current_bowl>=3)
        {
        	score=score+10+scoreList[current_bowl+1]+scoreList[current_bowl+2];
        }
        //if no 2 bowls ahead
        else
        {
        	score=score+10;
        }
        //Add score
        frameChanceCtr=0; current_frame++; frameScore=0;
    }//end strike if
    
	else{
		frameScore=frameScore + scoreList[current_bowl];
        //document.write(" Open/Spare " +frameScore);
		if(frameScore==10 && frameChanceCtr==2)//if spare
		{
        	//if 1 bowls ahead exist add them
            //document.write(" Spare ");
       		 if(bowllen-current_bowl>=2)
       		 {
       		 	score=score+10+scoreList[current_bowl+1]-scoreList[current_bowl-1];
       		 }
       		 //if no 2 bowls ahead
      		  else
       		 {
        			score=score+10-scoreList[current_bowl-1];
       		 }
		}
        else{//open
        //document.write(" Open ");
        
        if(frameChanceCtr==1){
        score=score+scoreList[current_bowl];}
        else if(frameChanceCtr==2){
        score=score+frameScore-scoreList[current_bowl-1];
        }
        
       
        //frameScore=frameScore+scoreList[current_bowl];
        
        }
        
     	if(frameChanceCtr==2)//works for strike
		{
			frameChanceCtr=0; current_frame++; frameScore=0;
		}
        

	}//end else
    
 
    
   // document.write(score +" "+current_frame+ " "+ current_bowl+"<br>");
    
	

}//end loop


document.write(input+ " => "+score +"<br>");
//document.write(current_frame +"<br>");
//document.write(frameChanceCtr +"<br>");

//Each frame has two chances to knock down 10 pins
// If strike then one chance & score is sum of next two bowls (one frame)
//If spare sum of next bowl (1/2 frame)
// Else its the sum of the current frame

//Suggested - create a "bowls" counter & "frame ctr
//Since we know the full score we can take from ahead
//if nothing ahead (incomplete) then current minimum score is returned