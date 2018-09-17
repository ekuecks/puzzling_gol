from django.shortcuts import render


# Create your views here.
def index(request):
    game_seed = "42"
    rows = 5
    cols = 5
    cells = rows * cols
    board_ids = list(range(cells))
    goal_ids = list(range(cells, cells * 2))
    steps = 5
    context = {
        "game_seed": game_seed,
        "board_ids": board_ids,
        "goal_ids": goal_ids,
        "steps": steps,
    }
    return render(request, "gol/index.html", context)
