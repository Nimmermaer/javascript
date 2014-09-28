//document.write("das kommt aus der externen Datei"); 
/*
 var halloText; 
 halloText = "Hallo Welt"; 
 var textEinfach = "Das geht auch so"; 
 document.write("erster text:"+halloText + "<br>"); 
 document.write("zweiter text;" + textEinfach + "<br>");
 var nochEine; 
 document.write("Ohne Wert:" + nochEine + "<\/p>"); 
 
 
 var ihrName = prompt("Bitte Ihren Namen\n eingeben", "Peter"); 
 alert("Sie haben eignegeben: \n" + ihrName+ "\nVielen Dank"); 
 
 
 //Deklaration, Zuweisung
 
 var zahl, nochEineZahl; 
 zahl = 42; 
 nochEineZahl= zahl + 30.8; 
 var kleineZahl = -3.7e-3; 
 var grosseZahl = 5.2e6; 
 document.write("1. Zahl = " + zahl +"<br>"); 
 document.write("2. Zahl = " + nochEineZahl +"<br>"); 
 document.write("Unerwartete Zahl = " + nochEineZahl + 25 +"<br>"); 
 document.write("3. Zahl = " + (nochEineZahl +25) +"<br>"); 
 document.write("kleine Zahl = " + kleineZahl +"<br>"); 
 document.write("große Zahl = " + grosseZahl +"<br>"); 
 
 //Deklaration, Zuweisung
 var gespeichert = true; 
 var fertig = false; 
 
 //Ausgabe
 document.write("gespeichert:" +gespeichert+"<br>"); 
 document.write("Fertig: "+fertig+"<\/p>"); 
 
 var z; 
 z = 13% 5; 
 document.write(z + "<br>");
 z=6;
 z = -z; 
 document.write(z + "<br>");
 z = z * 5; document.write(z + "<\/p>");
 z = 2 +4 -2.5; 
 document.write("<p>" + z + "<br>");
 z = 2 +4 * 3 -6 / 2 ;
 document.write(z + "<br>");
 z = (2 +4)*(3-6) / 2; 
 document.write(z + "<br>");
 
 
 var tx;
 tx = "Das"; document.write("<p>" + tx + "<br>");
 tx = tx + " ist ein"; document.write(tx + "<br>");
 tx += " Satz."; document.write(tx + "<\/p>");
 var z;
 z = 6; document.write("<p>" + z + " ");
 z++; document.write(z + " ");
 z--; document.write(z + " ");
 z += 13; document.write(z + " ");
 z -= 5; document.write(z + " ");
 z *= 3; document.write(z + " ");
 z /= 6; document.write(z + " ");
 z %= 3; document.write(z + "<\/p>");
 
 
 var eingabe = prompt("Bitte geben Sie die erste Zahl ein"); 
 var z1 = parseFloat(eingabe); 
 var z2 = parseFloat(prompt("Bitte geben Sie die zweite zahl ein")); 
 var ergebnis = z1 + z2; 
 alert (z1 + " + " +z2+" = "+ergebnis); 
 
 
 var a = 7, b = 12;
 // 1: Einfache Verzweigung
 if(a > b)
 document.write("<p>1: a ist größer als b<\/p>");
 // 2: Einfache Verzweigung, mit else
 if(a < b)
 document.write("<p>2: a ist kleiner als b<\/p>");
 else
 document.write("<p>2: a ist nicht kleiner als b<\/p>");
 // 3: Einfache Verzweigung, mehrere Anweisungen im Block
 if(a > b)
 {
 document.write("<p>3: a ist größer als b<br>");
 document.write("3: Eine weitere Zeile<\/p>");
 }
 // 4: Mehrfache Verzweigung
 if(a > b)
 document.write("<p>4: a ist größer als b<\/p>");
 else if(a < b)
 document.write("<p>4: a ist kleiner als b<\/p>");
 else
 document.write("<p>4: a ist gleich b<\/p>");
 // 5: Zeichenketten
 var land = "Katalonien";
 if(land == "Spanien")
 document.write("<p>5: Land ist Spanien<\/p>");
 if(land != "Spanien")
 document.write("<p>5: Land ist nicht Spanien<\/p>");
 // 6: Ternärer Operator
 var groesser = (a > b) ? a : b;
 document.write("<p>6: Die größere Zahl ist " + groesser + "<\/p>");
 
 var answer = confirm("Wollen sie diese aktion durchführen?"); 
 if(answer){
 alert(answer); 
 }else{
 alert(answer); 
 }
 //
 var a = 15;
 if(a >= 10 && a <= 20) // Und-Operator
 document.write("<p>1: a liegt zwischen 10 und 20<\/p>");
 if(a < 10 || a > 20) // Oder-Operator
 document.write("<p>2: a liegt nicht zwischen 10 und 20<\/p>");
 if(!(a < 10 || a > 20)) // Nicht-Operator
 document.write("<p>3: a liegt zwischen 10 und 20<\/p>");
 
 
 // 
 var zufall = Math.random();
 var eingabe = prompt("Geben Sie eine Zahl von 0 bis 1 ein, ohne 1");
 var zahl = parseFloat(eingabe);
 // Auswertung
 if(eingabe == null)
 alert("Sie haben den Button Abbrechen betätigt");
 else if(eingabe == "")
 alert("Sie haben nichts eingegeben");
 else if(isNaN(eingabe))
 alert("Sie haben keine gültige Zahl eingegeben");
 else if(zahl < 0 || zahl >= 1)
 alert("Sie haben keine Zahl im gültigen Bereich eingegeben");
 else if(Math.abs(zufall - zahl) < 0.1)
 alert("Sie sind nah dran");
 else
 alert("Sie sind weit weg");
 // Kontrolle
 alert("Zufall: " + zufall + "\nEingabe: " + eingabe
 + "\nisNaN(): " + isNaN(eingabe) + "\nDifferenz: " + (zufall-zahl)
 + "\nBetrag: " + Math.abs(zufall-zahl));
 
 
 var a = 4711;
 var b = ("Wurst" + 23);
 var c = 4711;
 var d = true;
 document.write("<p>a: " + a + ", " + typeof a + "<br>");
 document.write("b: " + b + ", " + typeof b + "<br>");
 document.write("c: " + c + ", " + typeof c + "<br>");
 document.write("d: " + d + ", " + typeof d + "<\/p>");
 if(a == b)
 document.write("<p>a == b<\/p>");
 if(a !== b)
 document.write("<p>a !== b<\/p>");
 if(a === c)
 document.write("<p>a === c<\/p>");
 
 
 var land = prompt("Bitte ein Land eingeben:");
 switch(land)
 {
 case "Italien":
 alert("Hauptstadt des Staates: Rom");
 break;
 case "England":
 case "Wales":
 case "Schottland":
 
 alert("Hauptstadt des Staates: London");
 break;
 default:
 alert("Hauptstadt des Staates nicht bekannt");
 }
 
 
 var i;
 // 1: Aufwärts
 document.write("<p>1: ");
 for (i = 1; i <= 5; i++)
 document.write(i + " ");
 // 2: Abwärts
 document.write("<br>2: ");
 for (i = 20; i >= 10; i--)
 document.write(i + " ");
 // 3: Mit Dezimalzahl
 document.write("<br>3: ");
 for (i = 3; i <= 4; i += 0.2)
 document.write(i + " ");
 // 4: Mit Dezimalzahl, optimiert
 document.write("<br>4: ");
 for (i = 3; i <= 4.1; i += 0.2)
 document.write(i.toFixed(1) + " ");
 // 5: Mit break und continue
 document.write("<br>5: ");
 for (var k = 10; k <= 50; k++)
 {
 if (k >= 16 && k <= 24)
 continue;
 if (k > 30)
 break;
 document.write(k + " ");
 }
 document.write("<\/p>");
 
 
 document.write("<table border='1' width='30 %'>");
 for(var zeile=1; zeile<=3; zeile++)
 {
 document.write("<tr>");
 for(var spalte=1; spalte<=5; spalte++)
 document.write("<td width='20 %'>Zeile " + zeile
 + " / Spalte " + spalte + "<\/td>");
 document.write("<\/tr>");
 }
 document.write("<\/table>");
 
 
 
 var zahl, zahl2;  
 zahl = (0.035).toFixed(2); 
 zahl2 = (0.045).toFixed(2); 
 
 document.write(zahl +  " " + zahl2); 
 */


var text, input, length = 3, counter = 0;
alert("Gedächnis-Training: \n\n Merken Sie sich die Ziffernfolgen, die"
        + "gleich erscheinen, und geben Sie sie anschließend ein. Es"
        + "erscheinen zunächst dreimal drei Ziffern, dann dreimal vier"
        + "ZIffern usw. Sobald Sie eine Ziffernfolge falsch eingegeben"
        + "haben, ist das Ende des Trainings erreicht, und es erfogt eine"
        + "Bewertung. Wenn Sie die Internetseite aktualiseren, beginnt"
        + "das Training wieder von vorn.");

// Ablauf des Spiels
do {
    counter++;
    if (counter > 3) {
        length++;
        counter = 1
    }
    //alert("Länge: " + length + "\nZähler:" + counter);
    text = "";
    for (var i = 1; i <= length; i++) {
        text += Math.floor(Math.random() * 10);
        alert("Ziffernfolge: " + text);
        
        input = prompt("Ihre Eingabe");
       // document.write(text + "<br>");

    }
}
while (input === text);

//Bewertung

var result = length - 1;
if (result < 3){
    result = 0;
}
    
document.write("Sie konnten sich " + result + " Ziffern merken");
