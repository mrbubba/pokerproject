
class Card: 
	suit = "undefined"
	values = -1
	key = "undefined"
	def __init__(self, key, suit, value): 
		self.suit = suit
		self.value = value
		self.key = key

class Deck:

	permanent_deck = {}

	def __init__(self):

		suits = ['h','c','d','s']
		values = [2,3,4,5,6,7,8,9,10,11,12,13,14]
		for suit in suits:
			for value in values:
				key = "%s_%s" %(value,suit)
				c = Card(key, suit, value)
				self.permanent_deck[key] = c



#if __name__ == '__main__':
#	deck = Deck()