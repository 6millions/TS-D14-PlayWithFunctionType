import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {

    const msg = testMessage();
    res.send(msg);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function testMessage(): string {

    console.log('[testMessage]');
    let addNumber: (a: number, b: number) => number;

    addNumber = add;

    let resultTest = addNumber(7, 10);

    return "result is " + resultTest;
}

function add(input1: number, input2: number): number {

    console.log('[add] input1 = ' + input1 + ', input2 = ' + input2);
    const result = input1 + input2;

    return result;

}