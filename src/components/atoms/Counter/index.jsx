import { useSpring, animated } from 'react-spring';
import styles from './styles.module.scss'


function abbrNum(number, decPlaces) {
    if (number > 10000){
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "M", "B", "T" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Add the letter for the abbreviation
            var  conterAbbrev = abbrev[i];

             // We are done... stop
             break;
        }
    }
    }
    return [number, conterAbbrev];
} 



function Counter ({n}) {
    const counterValue = abbrNum(n,1)[0];
    const counterLetter = abbrNum(n,1)[1];
    const { number } = useSpring({
        from: 0,
        number: counterValue,
        delay: 200,
        config: { mass: 1 , tension: 8, friction: 20 },

    });
    
    return <span className={styles.Counter}><animated.div>{number.to((n) => Math.floor(n).toLocaleString("de")) }</animated.div>{counterLetter}</span>
   
}



export default Counter;