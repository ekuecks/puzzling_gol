from django.shortcuts import render


# Create your views here.
def index(request):
    game_seed = "42"
    context = {"game_seed": game_seed}
    return render(request, "gol/index.html", context)
