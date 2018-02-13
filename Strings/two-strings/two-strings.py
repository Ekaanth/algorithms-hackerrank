def twoStrings(s1, s2):
    out = ''
    for c in s1:
        if c in s2 and not c in out:
            out += c
    if len(out) > 0:
        return 'YES'
    else:
        return 'NO'


print(twoStrings('hello', 'world'))
