<?php

namespace Hesper;

/**
 * Write a method in the errorHandler class that calls the errorsHappen method and catches its error
 * and echos the resulting message with an "Error: " string before it.
 *
 * Expected output: "Error: This is an error"
 *
 * Make sure to execute your class method so that when we run php test6.php we get the expected output
 *
 */

class errorHandler {
    private function errorsHappen() {
        throw new \Exception('This is an error');
    }

    // Code goes here
    private function call() {
        errorsHappen();
    }
}
// I am not familiar with PHP at all so I hope this makes sense! I have written in Java before 
// So I am familiar with these concepts
// Code goes here
try {
    $p = new errorHandler();
    $p -> call();
}

catch(Exception $e) {
  echo 'Error: ' .$e->getMessage();
}