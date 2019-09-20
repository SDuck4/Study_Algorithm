def solution(phone_book):
    trie = {
        'final': False,
        'next': {}
    }
    for phone in phone_book:
        last_trie = trie
        for digit in phone:
            if digit not in last_trie['next']:
                last_trie['next'][digit] = {
                    'final': False,
                    'next': {}
                }
            if last_trie['final']:
                return False
            last_trie = last_trie['next'][digit]
        if len(last_trie['next']):
            return False
        last_trie['final'] = True
    return True


print(solution(["119", "97674223", "1195524421"]))      # False
print(solution(["123", "456", "789"]))                  # True
print(solution(["12", "123", "1235", "567", "88"]))     # False
print(solution(["97674223", "1195524421", "119"]))      # False
