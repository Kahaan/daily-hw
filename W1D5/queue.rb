class Queue
   def initialize
     @queue = []
   enend

   def enqueue(el)
     @queue.shift(el)
   end

   def dequeue(el)
     @queue.pop(el)
   end

   def show
     @queue.dup
   end
 end
