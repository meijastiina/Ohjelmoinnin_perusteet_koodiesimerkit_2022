describe("Array exercises", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // T1: Basic array handling - a
    it("T1: Basic array handling - a", function () {
        t01a();
        var temp1 = $("#result_a1").html();
        var temp2 = $("#result_a2").html();
        expect(temp1).toEqual("15,4,68,23,22,7,15,10,32,15");
        expect(temp2).toEqual("15 4 68 23 22 7 15 10 32 15 ");
    });
    
    // T1: Basic array handling - b
    it("T1: Basic array handling - b", function () {
        t01b();
        var temp = $("#result_b").html();
        expect(temp).toEqual("15 32 10 15 7 22 23 68 4 15 ");
    });
    
    // T1: Basic array handling - c
    it("T1: Basic array handling - c", function () {
        t01c();
        var temp1 = $("#result_c1").html();
        var temp2 = $("#result_c2").html();
        expect(temp1).toEqual("211");
        expect(temp2).toEqual("21.1");
    });
    
    // T1: Basic array handling - d
    it("T1: Basic array handling - d", function () {
        t01d();
        var temp1 = $("#result_d1").html();
        var temp2 = $("#result_d2").html();
        expect(temp1).toEqual("4");
        expect(temp2).toEqual("68");
    });
    
    // T1: Basic array handling - e
    it("T1: Basic array handling - e", function () {
        t01e();
        var temp = $("#result_e").html();
        expect(temp).toEqual("4 7 10 15 15 15 22 23 32 68 ");
    });
    
    // T2: Joker
    it("T2: Joker", function () {
        t02();
        var temp = $("#joker").html();
        temp = temp.trim();
        var digits = temp.split(" ");
        expect(digits.length).toEqual(7);
        for ( var i = 0; i < digits.length; i++) {
           expect(digits[i]).toBeLessThanOrEqual(9);
           expect(digits[i]).toBeGreaterThanOrEqual(0);
        }        
    });
    
    // T3: Lotto
    it("T3: Lotto", function () {
        t03();
        var temp1 = $("#lotto").html();
        var temp2 = $("#extra").html();
        var temp3 = $("#plus").html();
        
        temp1 = temp1.trim();
        var digits = temp1.split(" ");
        for ( var i = 0; i < digits.length; i++) {
           expect(digits[i]).toBeLessThanOrEqual(40);
           expect(digits[i]).toBeGreaterThanOrEqual(1);
           if (i > 0) {
               expect(digits[i]).not.toEqual(digits[i - 1]);
           }
           expect(digits[i]).not.toEqual(temp2);
        }        
                
        expect(temp3).toBeLessThanOrEqual(40);
        expect(temp3).toBeGreaterThanOrEqual(1);        
    });
    
    // T4: Random order
    it("T4: Random order", function () {
        t04();
        var temp = $("#random").html();
        temp = temp.trim();
        var digits = temp.split(" ");
        expect(digits.length).toEqual(10);
        //var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for ( let i = 0; i < digits.length; i++) {
            expect(Number(digits[i])).toBeGreaterThan(0);
            expect(Number(digits[i])).toBeLessThan(11);
        }
        digits.sort(function(a, b){return a-b});
        for ( let i = 0; i < digits.length -1; i++) {
            expect(digits[i]).not.toEqual(digits[i + 1]);
        }
    });

    // T5: Dices
    it("T5: Dices", function () {
        t05();
        let temp = $("#dices").children();
        let määrä = temp.length;
        
        let six = 0;
        temp.each(function(){            
            let text = $(this).attr("alt");
            let mrk = Number(text[text.length-1]);
            if (mrk === 6) {
                six++;
            }
        });

        let temp2 = Number($("#sixes").html());
        expect(temp2).toEqual(six);
        expect(määrä).toEqual(100);        
    });    
});

