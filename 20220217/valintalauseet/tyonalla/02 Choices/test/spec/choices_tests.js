
describe("Choices exercises", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // V1: Going in
    it("V1: Going in", function () {
        // aseta parametrit
        $("#year").val(2000);
        // kutsutaan tarkistettavaa funktiota
        v01();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#allow").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("Welcome!");
        
        $("#year").val(2010);
        // kutsutaan tarkistettavaa funktiota
        v01();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#allow").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("too young");
        
    });

    // V2 ja V3: Numbers
    it("V2 ja V3: Numbers - test 1", function () {
        // aseta parametrit
        $("#number1").val(12);
        $("#number2").val(6);
        // kutsutaan tarkistettavaa funktiota
        v02();
        v03();
        // haetaan etusivulta html-elementin arvo
        var temp1 = $("#smaller").html();
        var temp2 = $("#negative").html();
        // tarkistetaan onko se oikein
        expect(temp1).toEqual("6");
        expect(temp2).toEqual("Both numbers are either positive or negative.");
    });
    
    it("V2 ja V3: Numbers - test 2", function () {
        // aseta parametrit
        $("#number1").val(-12);
        $("#number2").val(6);
        // kutsutaan tarkistettavaa funktiota
        v02();
        v03();
        // haetaan etusivulta html-elementin arvo
        var temp1 = $("#smaller").html();
        var temp2 = $("#negative").html();
        // tarkistetaan onko se oikein
        expect(temp1).toEqual("-12");
        expect(temp2).toEqual("One of the numbers is negative.");
    });    
    
    it("V2 ja V3: Numbers - test 3", function () {
        // aseta parametrit
        $("#number1").val(-12);
        $("#number2").val(-6);
        // kutsutaan tarkistettavaa funktiota
        v02();
        v03();
        // haetaan etusivulta html-elementin arvo
        var temp1 = $("#smaller").html();
        var temp2 = $("#negative").html();
        // tarkistetaan onko se oikein
        expect(temp1).toEqual("-12");
        expect(temp2).toEqual("Both numbers are either positive or negative.");
    });    
    
    // V4: Square or rectangle
    it("V4: Square or rectangle", function () {
        // aseta parametrit
        $("#side1").val(5);
        $("#side2").val(5);
        // kutsutaan tarkistettavaa funktiota
        v04();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#square").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("square");
        
        // aseta parametrit
        $("#side1").val(4);
        $("#side2").val(5);
        // kutsutaan tarkistettavaa funktiota
        v04();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#square").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("rectangle");        
    });
    
    
    // V5: Even or odd
    it("V5: Even or odd", function () {
        // aseta parametrit
        $("#number3").val(5);
        // kutsutaan tarkistettavaa funktiota
        v05();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#even").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("odd");
        
        // toinen testi
        $("#number3").val(4);
        v05();
        var temp = $("#even").html();        
        expect(temp).toEqual("even");        
    });
    
    
    // V6: Positive or negative
    it("V6: Positive or negative", function () {
        // aseta parametrit
        $("#number3").val(5);
        // kutsutaan tarkistettavaa funktiota
        v06();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#positive").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("positive");
        
        // toinen testi
        $("#number3").val(-5);
        v06();
        var temp = $("#positive").html();
        expect(temp).toEqual("negative"); 
        
        // kolmas testi
        $("#number3").val(0);
        v06();
        var temp = $("#positive").html();
        expect(temp).toEqual("zero"); 
    });
    
    // V7: Smallest
    it("V7: Smallest", function () {
        // aseta parametrit
        $("#digit_a").val(4);
        $("#digit_b").val(6);
        $("#digit_c").val(9);        
        $("#digit_d").val(12);        
        // kutsutaan tarkistettavaa funktiota
        v07();
        var temp = $("#smallest").html();
        expect(temp).toEqual("4");
        
        $("#digit_b").val(3);
        v07();
        var temp = $("#smallest").html();
        expect(temp).toEqual("3");

        $("#digit_c").val(2);
        v07();
        var temp = $("#smallest").html();
        expect(temp).toEqual("2");
        
        $("#digit_d").val(1);
        v07();
        var temp = $("#smallest").html();
        expect(temp).toEqual("1");
    });
    
    // V7: Biggest
    it("V7: Biggest", function () {
       // aseta parametrit
        $("#digit_a").val(4);
        $("#digit_b").val(6);
        $("#digit_c").val(9);        
        $("#digit_d").val(12);        
        // kutsutaan tarkistettavaa funktiota
        v07();
        var temp = $("#biggest").html();
        expect(temp).toEqual("12");
        
        $("#digit_c").val(14);
        v07();
        var temp = $("#biggest").html();
        expect(temp).toEqual("14");

        $("#digit_b").val(15);
        v07();
        var temp = $("#biggest").html();
        expect(temp).toEqual("15");
        
        $("#digit_a").val(16);
        v07();
        var temp = $("#biggest").html();
        expect(temp).toEqual("16");
    });
    
    // V8: Leap Year
    it("V8: Leap Year", function () {
        // aseta parametrit
        $("#yearx").val(1900);
        // kutsutaan tarkistettavaa funktiota
        v08();
        // haetaan etusivulta html-elementin arvo
        var temp = $("#leap_year").html();
        
        // tarkistetaan onko se oikein
        expect(temp).toEqual("is not leap year");
        
        $("#yearx").val(2000);
        v08();
        var temp = $("#leap_year").html();
        expect(temp).toEqual("is leap year");

        $("#yearx").val(1984);
        v08();
        var temp = $("#leap_year").html();
        expect(temp).toEqual("is leap year");
        
        $("#yearx").val(1982);
        v08();
        var temp = $("#leap_year").html();
        expect(temp).toEqual("is not leap year");        
    });
    
    // V9: Images
    it("V9: Images", function () {
        const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
        const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
        const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
        const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';         
        $("#number4").val(6);
        v09();
        var temp = $("#flower").html();
        expect(temp).toEqual(FLOWER1 + FLOWER4);

        $("#number4").val(13);
        v09();
        temp = $("#flower").html();
        expect(temp).toEqual(FLOWER2 + FLOWER3);
    });
});

