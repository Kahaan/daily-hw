def sum_to(n)
  return nil if n < 1
  return n if n == 1

  n + sum_to(n-1)
end

def add_nums(arr)
  return arr[0] if arr.length <= 1
  sum = 0
  sum + arr.pop + add_nums(arr)
end

def gamma_func(num)
  return nil if num <= 0
  return 1 if num == 1

  (num-1) * gamma_func(num-1)
end


def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?
  last = flavors.pop
  return true if last == favorite
  ice_cream_shop(flavors, favorite)
end


def reverse(string)
  return "" if string.empty?
  reverse(string[1..-1]) + string[0]
end
