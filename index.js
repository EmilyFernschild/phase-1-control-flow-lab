function scuberGreetingForFeet(someValue){
  let result
  if (someValue < 200){
    result = 'This one is on me!';
  }
  else if (someValue > 400 && someValue < 2000){
    result = 'That will be twenty bucks.';
  }
  else if (someValue > 2000){
    result = 'I will gladly take your thirty bucks.';
  }
  if (someValue > 2000 && someValue > 2500){
    result = 'No can do.';
  }
  return result
}
 
function ternaryCheckCity(city){
        const anyCity  = city;
        return anyCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  
    //     let anyCity = "NYC";
    
    // if (anyCity === true){
    //  city = 'Ok, sounds good.';
    // }
    // else if (anyCity === false) {
    //   city = 'No go.';
    // }

    //return city;

   
}

function switchOnCharmFromTip(charm){
  switch (charm) {
    case 'generous':
      return ('Thank you so much.');

    case 'not as generous':
      return ('Thank you.');

    case 'thanks for everything':
      return ('Bye.');
  }
}