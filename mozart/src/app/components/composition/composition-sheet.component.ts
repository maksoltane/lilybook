class Controller {

    private controller;

    $onInit() {
        this.controller.selectedIndex = 1;
    }
}

export const CompositionSheetComponentView: angular.IComponentOptions = {
    templateUrl: 'app/components/composition/composition-sheet-a.html',
    controller: Controller,
    bindings: {
        composition: '<'
    },
    require: {
        controller: '^lbCompositionView'
    }
};
