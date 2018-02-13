def makingAnagrams(s1, s2):
    out = ''
    for c in s1:
        if c in s2 and not c in out:
            out += c
    return (len(s1) - len(out)) + len(s2) - len(out)


print(makingAnagrams('cde', 'abc'))
