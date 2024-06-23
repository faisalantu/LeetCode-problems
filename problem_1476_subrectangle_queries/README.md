# **[1476. Subrectangle Queries](https://leetcode.com/problems/subrectangle-queries/)**

Implement the class `SubrectangleQueries` which receives a `rows x cols` rectangle as a matrix of integers in the constructor and supports two methods:

1. `updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)`

- Updates all values with `newValue` in the subrectangle whose upper left coordinate is `(row1,col1)` and bottom right coordinate is `(row2,col2)`.

2. `getValue(int row, int col)`

- Returns the current value of the coordinate `(row,col)` from the rectangle.

**Constraints:**

- There will be at most `500` operations considering both methods: `updateSubrectangle` and `getValue`.
- `1 <= rows, cols <= 100`
- `rows == rectangle.length`
- `cols == rectangle[i].length`
- `0 <= row1 <= row2 < rows`
- `0 <= col1 <= col2 < cols`
- `1 <= newValue, rectangle[i][j] <= 10^9`
- `0 <= row < rows`
- `0 <= col < cols`

## solution: using typescript

```ts
class SubrectangleQueries {
  private rect: number[][];

  constructor(rectangle: number[][]) {
    this.rect = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this.rect[i][j] = newValue;
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.rect[row][col];
  }
}
```

## Test the code

```ts
class SubrectangleQueries {
  private rect: number[][];

  constructor(rectangle: number[][]) {
    this.rect = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number
  ): void {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this.rect[i][j] = newValue;
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.rect[row][col];
  }
  getRectValue() {
    return this.rect;
  }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

//this function is just to test the test case
//you can ignore this and code will still work
//make sure to comment out the main function while submitting

const main = (queries: string[], initData: number[][], values: number[][]) => {
  var obj: SubrectangleQueries = new SubrectangleQueries(initData);

  queries.forEach((query, index) => {
    if (query === "getValue") {
      console.log(obj.getValue(values[index][0], values[index][1]));
    } else if (query === "updateSubrectangle") {
      obj.updateSubrectangle(
        values[index][0],
        values[index][1],
        values[index][2],
        values[index][3],
        values[index][4]
      );
      console.log(obj.getRectValue());
    }
  });
};

main(
  [
    "getValue",
    "updateSubrectangle",
    "getValue",
    "getValue",
    "updateSubrectangle",
    "getValue",
    "getValue",
  ],
  [
    [1, 2, 1],
    [4, 3, 4],
    [3, 2, 1],
    [1, 1, 1],
  ],
  [
    [0, 2],
    [1, 1, 3, 2, 88],
    [0, 2],
    [3, 1],
    [3, 0, 3, 2, 10],
    [3, 1],
    [0, 2],
  ]
);
```
