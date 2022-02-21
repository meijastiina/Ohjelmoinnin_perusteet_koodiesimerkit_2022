
describe("Function exercises", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // F1: Circle
    it("F1: Circle", function () {
        $("#radius1").val(6);
        f01();
        var temp1 = $("#c_around").html();
        var temp2 = $("#c_area").html();
        expect(temp1).toEqual("38");
        expect(temp2).toEqual("113");
    });
    
    // F2: Triangle
    it("F2: Triangle", function () {
        $("#side").val(6);
        $("#bottom").val(9);
        f02();
        var temp1 = $("#t_height").html();
        var temp2 = $("#t_around").html();
        var temp3 = $("#t_area").html();
        expect(temp1).toEqual("4");
        expect(temp2).toEqual("21");
        expect(temp3).toEqual("18");
    });
    
    // function tests here
    // calculateSquareAround
    it("calculateSquareAround", function () {
        var temp = calculateSquareAround(6);
        expect(temp).toEqual(24);
    });

    // calculateSquareArea
    it("calculateSquareArea", function () {
        var temp = calculateSquareArea(6);
        expect(temp).toEqual(36);
    });
    
    // calculateCircleAround
    it("calculateCircleAround", function () {
        var temp = Math.round(calculateCircleAround(6));
        expect(temp).toEqual(38);
    });
    
    // calculateCircleArea
    it("calculateCircleArea", function () {
        var temp = Math.round(calculateCircleArea(6));
        expect(temp).toEqual(113);
    });
    
    // F3: Circle 2
    it("F3: Circle 2", function () {
        $("#radius2").val(6);
        f03();
        var temp = $("#circle").html();
        expect(temp).toEqual("Circle: area is 113, around is 38.");
    });
    
    // F4: Square
    it("F4: Square", function () {
        $("#side2").val(6);
        f04();
        var temp = $("#square").html();
        expect(temp).toEqual("Square: area is 36, around is 24.");
    });
       
    // F5: Circle or Square
    it("F5: Circle or Square - circle", function () {
        $("#amount").val(7);
        shape(1);
        f05();
        var temp = $("#result").html();
        expect(temp).toEqual("Circle: area is 154, around is 44.");
    });
    
    // F5: Circle or Square
    it("F5: Circle or Square - square", function () {
        $("#amount").val(7);
        shape(2);
        f05();
        var temp = $("#result").html();
        expect(temp).toEqual("Square: area is 49, around is 28.");
    });
    
    // F6: Dice
    it("F6: Dice", function () {
        f06();
        var temp = $("#dice").html();
        expect(temp).toBeLessThanOrEqual(6);
        expect(temp).toBeGreaterThanOrEqual(1);
        
        f06();
        var temp = $("#dice").html();
        expect(temp).toBeLessThanOrEqual(6);
        expect(temp).toBeGreaterThanOrEqual(1);
        
        f06();
        var temp = $("#dice").html();
        expect(temp).toBeLessThanOrEqual(6);
        expect(temp).toBeGreaterThanOrEqual(1);
    });
    
    // F7: Random numbers
    it("F7: Random numbers", function () {
        $("#min").val(2);
        $("#max").val(7);
        f07();
        f07();
        f07();
        f07();
        var temp = $("#randoms").html();
        temp = temp.trim();
        var digits = temp.split(" ");
        for ( var i = 0; i < digits.length; i++) {
           expect(digits[i]).toBeLessThanOrEqual(7);
           expect(digits[i]).toBeGreaterThanOrEqual(2);
        }        
    });
        
    // more function tests
    // getCharacter
    it("getCharacter", function () {
        var temp = getCharacter("Liisa", 1, true);        
        expect(temp).toEqual("I");

        var temp = getCharacter("Liisa", 4, false);        
        expect(temp).toEqual("a");        
    });    

    // getDigit
    it("getDigit", function () {
        var digit1 = getDigit();
        
        var today = new Date();
        var year = today.getFullYear();
        year = year.toString();
        var digit2 = year.charAt(3);
    
        expect(digit1).toEqual(digit2);
    });       
        
    // F8: User id
    it("F8: User id", function () {
        $("#firstName").val("Liisa");
        $("#lastName").val("Auer");
        f08();
        var temp1 = $("#userid").html();        
        var digit = getDigit();
        // n9liau00
        expect(temp1).toEqual("n" + digit + "liau00");
        
        var temp2 = $("#password").html();
        digit++;
        // !?lAaRE+/10
        expect(temp2).toEqual("!?lAaRE+/" + digit);        
    }); 
    
    const ERROR1 = "Day must be 1-31.";
    const ERROR2 = "Month must be 1-12.";
    const ERROR3 = "Year must be between 1900 and current year.";

    // checkDate
    it("checkDate", function () {
        let msg = checkDate(32, 12, 1990);
        expect(msg).toEqual(ERROR1);

        msg = checkDate(12, 15, 1990);
        expect(msg).toEqual(ERROR2);

        msg = checkDate(12, 12, new Date().getFullYear() + 1);
        expect(msg).toEqual(ERROR3);

        msg = checkDate(12, 12, 1990);
        expect(msg).toEqual("");
    });
    
    // lucky number
    it("luckyNumber", function () {
        let msg = luckyNumber(12, 12, 2000)
        expect(msg).toEqual("0");

        msg = luckyNumber(15, 12, 2005)
        expect(msg).toEqual("6");
    });

    // F9: check input data
    it("F9: check input data - wrong input", function () {
        $("#dd").val("32");
        $("#mm").val("12");
        $("#yy").val("1990");

        f09();
        var temp1 = $("#check_error").html();
        var temp2 = $("#check_result").html();

        expect(temp1).toEqual(ERROR1);
        expect(temp2).toEqual("");
        
        $("#dd").val("12");
        $("#mm").val("15");
        $("#yy").val("1990");

        f09();
        var temp1 = $("#check_error").html();
        var temp2 = $("#check_result").html();

        expect(temp1).toEqual(ERROR2);
        expect(temp2).toEqual("");

        $("#dd").val("12");
        $("#mm").val("12");
        $("#yy").val(new Date().getFullYear() + 1);

        f09();
        var temp1 = $("#check_error").html();
        var temp2 = $("#check_result").html();

        expect(temp1).toEqual(ERROR3);
        expect(temp2).toEqual("");
    }); 

    // F9: check input data
    it("F9: check input data - right input", function () {
        $("#dd").val("15");
        $("#mm").val("12");
        $("#yy").val("2005");

        f09();
        var temp1 = $("#check_error").html();
        var temp2 = $("#check_result").html();

        var vuosi = new Date().getFullYear();
        var ikä = vuosi - 2005;

        expect(temp1).toEqual("");
        expect(temp2).toEqual(
            "Your date is right and you are " + ikä + " years old.<br>" +
            "Your lucky number is 6"
        );        
    });      
});

