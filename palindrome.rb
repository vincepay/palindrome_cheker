puts `clear` 
puts "Longest palindrome I've seen: go hand a salami, im a lasagna hog"

puts "Enter the word:"
word = gets.strip.downcase.gsub(" ", "").split("")
len = word.length

palindrome = true
i=0
while palindrome && i< len/2
  i += 1
  if word[i-1] != word[-i]
    palindrome = false
    break
  end
end
if palindrome
  puts "It is a palindrome!"
else
  puts "It is NOT a palindrome!"
end
