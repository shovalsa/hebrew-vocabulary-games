

def make_list(fileName):
    """
    :param fileName: A file containing a list of words, where the first column is english,
    the second transliteration, and the third Hebrew.
    :return: a 2D list, where each sublist represents one word.
    """
    lst = []
    english_hebrew = []
    with open(fileName) as f:
        for line in f.readlines():
            lst.append(line.split(sep=';'))
        for item in lst:
            english_hebrew.append([item[0] ,item[2][:-1]])
    return english_hebrew