import React from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import BottomSheetHeader from './BottomSheetHeader';
import RideDetails from './RiderDetails';

const RideDetailsBottomSheet = ({
  rideSheetRef,
  snapPoints,
  onClose,
}: {
  rideSheetRef: React.RefObject<BottomSheet>;
  snapPoints: string[];
  onClose: () => void;
}) => {
  return (
    <BottomSheet
      ref={rideSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={onClose}>
      <BottomSheetView>
        <BottomSheetHeader title="Ride Details" />
        <RideDetails />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default RideDetailsBottomSheet;
